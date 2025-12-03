import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, contact, project, serviceType, timeline, details } = data;

    if (!name || !contact) {
      return NextResponse.json(
        { error: 'Name and contact are required' },
        { status: 400 }
      );
    }

    const docRef = await addDoc(collection(db, 'contacts'), {
      name,
      contact,
      project,
      serviceType,
      timeline,
      details,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json(
      { message: 'Success', id: docRef.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error adding document: ', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
