// src/db/models/student.js

import { model, Schema } from 'mongoose';

const eventsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    event_date: {
      type: Date,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const membersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    eventId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    comment: {
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const eventsCollection = model('events', eventsSchema);
export const membersCollection = model('members', membersSchema);
