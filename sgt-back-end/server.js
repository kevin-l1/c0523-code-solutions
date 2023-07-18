import express from 'express';
import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    }

    const sql = `
      select *
        from "grades"
      where "gradeId" = $1
    `;

    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.json(grade);
    } else {
      res
        .status(404)
        .json({ error: `Cannot find grade with gradeId ${gradeId}` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    const grade = result.rows;
    res.status(200).json(grade);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      res.status(400).json({ error: 'The grade is invalid.' });
    }
    const sql = `
      insert into "grades" ("name", "course", "score")
        values ($1, $2, $3)
        returning *
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const [grade] = result.rows;
    res.status(201).json(grade);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      res.status(400).json({ error: 'The grade is invalid.' });
    }
    if (gradeId < 1) {
      res.status(400).json({ error: 'gradeId must be a positive integer' });
    }
    const sql = `
      update "grades"
        set "name" = $1,
            "course" = $2,
            "score" = $3
        where "gradeId" = $4
        returning *
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const [grade] = result.rows;
    if (grade) {
      res.status(201).json(grade);
    } else {
      res
        .status(404)
        .json({ error: `Cannot find grade with gradeId ${gradeId}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (gradeId < 1) {
      res.status(400).json({ error: 'gradeId must be a positive integer' });
    }
    if (!gradeId) {
      res.status(404).json({ error: 'The gradeId does not exist' });
    }
    const sql = `
      delete from "grades"
        where "gradeId" = $1
        returning *
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const [grade] = result.rows;
    if (grade) {
      res.status(204).json(grade);
    } else {
      res
        .status(404)
        .json({ error: `Cannot find grade with gradeId ${gradeId}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
