import { Booking, BookingStatus } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const insartIntoDB = async (data: Booking, id: string): Promise<Booking> => {
  if (data) {
    data.userId = id;
    data.status = BookingStatus.pending;
  }

  const alreadyBooked = await prisma.booking.findMany({
    where: {
      date: data.date,
    },
  });
  const existingBooking = alreadyBooked.map(schedule => {
    return {
      date: schedule.date,
      startTime: schedule.startTime,
      endTime: schedule.endTime,
    };
  });
  const newSlot = {
    date: data.date,
    startTime: data.startTime,
    endTime: data.endTime,
  };

  console.log(existingBooking);
  console.log(newSlot);

  for (const slot of existingBooking) {
    const existingStart = new Date(`${slot.date}T${slot.startTime}:00`);
    const existingEnd = new Date(`${slot.date}T${slot.endTime}:00`);
    const newStart = new Date(`${newSlot.date}T${newSlot.startTime}:00`);
    const newEnd = new Date(`${newSlot.date}T${newSlot.endTime}:00`);

    // console.log(existingStart, existingEnd);
    // console.log(newStart, newEnd);

    if (newStart < existingEnd && newEnd > existingStart) {
      throw new ApiError(httpStatus.CONFLICT, 'Slot already booked');
    }
  }

  const result = await prisma.booking.create({
    data,
    include: {
      user: true,
      service: true,
    },
  });
  return result;
};

export const BookingsService = {
  insartIntoDB,
};
