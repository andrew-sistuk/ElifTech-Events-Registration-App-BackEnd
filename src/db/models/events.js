// src/db/models/student.js

import { model, Schema } from 'mongoose';

const eventsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const eventsCollection = model('events', eventsSchema);
