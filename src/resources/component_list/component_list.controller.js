// import mongoose from "mongoose";
import { ComponentList } from "./component_list.model";
import { code } from "../../config";

export const getAll = async (req, res) => {
  try {
    // Get all records from db into a doc
    const docs = await ComponentList.find().lean().exec();
    // If error in query then return updated status code
    if (!docs) {
      return res.status(code.badRequest).end();
    }
    // Send that doc as a json and set the status code to ok
    res.status(code.ok).json({ data: docs });
  } catch (error) {
    // If error occured send status code and log the error
    console.error(error);
    res.status(code.badRequest).end();
  }
};

export const getOne = async (req, res) => {
  try {
    // Get the record with passed id in request from db
    const doc = await ComponentList.findOne({ _id: req.params.id })
      .lean()
      .exec();
    // If error in query then return updated status code
    if (!doc) {
      return res.status(code.badRequest).end();
    }
    // On success - update status code and return json data
    res.status(code.ok).json({ data: doc });
  } catch (error) {
    // On error - update status code and console.error error
    console.error(error);
    res.status(badRequest).end();
  }
};

export const createOne = async (req, res) => {
  try {
    // Create a doc in mongo db
    const doc = await ComponentList.create({ ...req.body });
    // If error in query then return updated status code
    if (!doc) {
      return res.status(code.badRequest).end();
    }
    // Send that created doc back as a json response with valid status code
    res.status(code.created).json({ data: doc });
  } catch (error) {
    // If error occured send status code and console log
    console.error(error);
    res.status(code.badRequest).end();
  }
};

export const updateOne = async (req, res) => {
  try {
    // Update a doc in mongo db with passed id from params
    const filter = { _id: req.params.id };
    const update = req.body;
    const options = { new: true };

    const doc = await ComponentList.findOneAndUpdate(filter, update, options)
      .lean()
      .exec();
    // If error in query then return updated status code
    if (!doc) {
      return res.status(code.badRequest).end();
    }
    // Send that as a json response with valid status code
    res.status(code.ok).json({ data: doc });
  } catch (error) {
    // If error occured send status code and console log
    console.error(error);
    res.status(code.badRequest).end();
  }
};

export const removeOne = async (req, res) => {
  try {
    // delete a doc in mongo db with passed id from params
    const filter = { _id: req.params.id };

    const doc = await ComponentList.findOneAndRemove(filter);
    // If error in query then return updated status code
    if (!doc) {
      return res.status(code.badRequest).end();
    }
    // Send a json response with valid status code
    res.status(code.ok).json({ data: doc });
  } catch (error) {
    // If error occured send status code and console log
    console.error(error);
    res.status(code.badRequest).end();
  }
};
