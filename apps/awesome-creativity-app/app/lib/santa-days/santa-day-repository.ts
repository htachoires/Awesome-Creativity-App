import { sql } from '@vercel/postgres';

import { SantaDay } from './santa-day';

export async function GetSantaDays(): Promise<SantaDay[]> {
  return await sql`SELECT *
                   FROM santa_day
                   ORDER BY day`.then((x) =>
    x.rows.map((x) => {
      return {
        isOpened: x.is_opened,
        day: x.day,
      };
    })
  );
}
