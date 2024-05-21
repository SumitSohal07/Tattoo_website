const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const dbo = require('../db/conn');

router.get('/', async (req, res) => {
  try {
    const dbConnect = await dbo.getDb();
    const data = await dbConnect.collection('records').find().toArray();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to the database' });
  }
});

router.post('/', async (req, res) => {
  try {
    const dbConnect = await dbo.getDb();
    const result = await dbConnect.collection('records').insertOne(req.body);
    res.status(201).json(result.ops[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to the database' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const dbConnect = await dbo.getDb();
    const result = await dbConnect.collection('records').updateOne(
      { _id: new MongoClient.ObjectID(req.params.id) },
      { $set: req.body }
    );
    res.json({ message: 'Record updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to the database' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const dbConnect = await dbo.getDb();
    const result = await dbConnect.collection('records').deleteOne({ _id: new MongoClient.ObjectID(req.params.id) });
    res.json({ message: 'Record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to the database' });
  }
});

module.exports = router;