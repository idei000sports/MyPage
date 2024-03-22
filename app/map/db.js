
/*
const Database = require("better-sqlite3");
const db = new Database("db/birthplace_of_the_band.db");

function select() {
    const rows = db.prepare('SELECT * FROM users').all();
    return rows;
}

export default function returnSelect(){
    return select();
}

*/
/*
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    const notes = await getAllNotes();
    return NextResponse.json(notes);
}

async function getAllNotes() {
    const notes = await prisma.notes.findMany();
    return notes;
}
*/