'use server';

import { sql } from '@vercel/postgres';

import { SantaDay } from './santa-day';

export async function GetSantaDays(): Promise<SantaDay[]> {
  return await sql`SELECT *
                   FROM santa_day
                   ORDER BY day`.then((x) =>
    x.rows.map((x) => {
      return {
        id: x.id,
        isOpened: x.is_opened,
        day: x.day,
      };
    })
  );
}

export async function OpenSantaDay(santaId: string): Promise<boolean> {
  return await sql`UPDATE santa_day
                   SET is_opened = true
                   WHERE id = ${santaId}`.then((x) => {
    return true;
  });
}
