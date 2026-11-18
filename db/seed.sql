INSERT INTO meetings (
  date, meeting_type, presiding, conducting, announcements,
  opening_hymn, opening_prayer, ward_business, stake_business,
  sacrament_hymn, speakers, closing_hymn, closing_prayer
) VALUES
(
  '2026-09-27', 'testimony', 'Bishop Thompson', 'Brother Nakamura',
  ARRAY[]::TEXT[],
  '{"number":134,"title":"I Believe in Christ"}', 'Sister Park',
  '[]', false,
  '{"number":175,"title":"God, Our Father, Hear Us Pray"}',
  '[]',
  '{"number":219,"title":"Because I Have Been Given Much"}', 'Brother Alvarez'
),
(
  '2026-10-04', 'regular', 'Bishop Thompson', 'Brother Nakamura',
  ARRAY['Ward temple night: Oct 15'],
  '{"number":2,"title":"The Spirit of God"}', 'Sister Ramirez',
  '[{"description":"Sustaining of new Sunday School president"}]', false,
  '{"number":169,"title":"In Remembrance of Thy Suffering"}',
  '[{"name":"Sister Chen","topic":"The Sacrament","type":"speaker"},
    {"name":"Brother Osei","topic":"Covenant Keeping","type":"speaker"}]',
  '{"number":31,"title":"O God, Our Help in Ages Past"}', 'Brother Lewis'
),
(
  '2026-10-11', 'regular', 'Bishop Thompson', 'Sister Torres',
  ARRAY['Ministering interviews this week'],
  '{"number":85,"title":"How Firm a Foundation"}', 'Brother Kim',
  '[{"description":"Release - Sister Martinez - Primary Teacher"},{"description":"Sustain - Sister Agbavor - Primary Teacher"}]', false,
  '{"number":173,"title":"While of These Emblems We Partake"}',
  '[{"name":"Sister Nakamura","topic":"Personal Revelation","type":"speaker"},
    {"name":"Youth Choir","topic":"","type":"musical-number"},
    {"name":"Brother Santos","topic":"Temple Covenants","type":"speaker"}]',
  '{"number":226,"title":"Improve the Shining Moments"}', 'Sister Jensen'
),
(
  '2026-10-18', 'stake', 'President Gimenez', '',
  ARRAY[]::TEXT[],
  '{"number":0,"title":""}', '',
  '[]', true,
  '{"number":0,"title":""}',
  '[]',
  '{"number":0,"title":""}', ''
),
(
  '2026-10-25', 'regular', 'Bishop Thompson', 'Brother Nakamura',
  ARRAY['Primary program next week'],
  '{"number":19,"title":"We Thank Thee, O God, for a Prophet"}', 'Sister Okafor',
  '[]', false,
  '{"number":182,"title":"Upon the Cross of Calvary"}',
  '[{"name":"Brother Adeyemi","topic":"Service","type":"speaker"},
    {"name":"Sister Lopez","topic":"Gratitude","type":"speaker"}]',
  '{"number":243,"title":"Do What Is Right"}', 'Brother Hall'
),
(
  '2026-11-01', 'regular', 'Bishop Thompson', 'Sister Torres',
  ARRAY['Primary program today', 'Ward choir practice Wednesday'],
  '{"number":304,"title":"I Am a Child of God"}', 'Brother Bello',
  '[]', false,
  '{"number":193,"title":"I Stand All Amazed"}',
  '[{"name":"Primary Children","topic":"Primary Program","type":"musical-number"}]',
  '{"number":301,"title":"I Am a Child of God"}', 'Sister Reyes'
),
(
  '2026-11-08', 'special', 'Bishop Thompson', 'Brother Nakamura',
  ARRAY['Ward conference next Sunday'],
  '{"number":5,"title":"High on the Mountain Top"}', 'Sister Ward',
  '[{"description":"Sustaining of new ward clerk"}]', false,
  '{"number":170,"title":"As Now We Take the Sacrament"}',
  '[{"name":"Brother Eze","topic":"Ministering","type":"speaker"},
    {"name":"Sister Kowalski","topic":"Hope in Christ","type":"speaker"}]',
  '{"number":135,"title":"Praise to the Man"}', 'Brother Khan'
),
(
  '2026-11-15', 'testimony', 'Bishop Thompson', 'Brother Nakamura',
  ARRAY['Thanksgiving ward dinner: Nov 21'],
  '{"number":1,"title":"The Morning Breaks"}', 'Sister Mensah',
  '[]', false,
  '{"number":172,"title":"In Humility, Our Savior"}',
  '[]',
  '{"number":2,"title":"The Spirit of God"}', 'Brother Rossi'
),
(
  '2026-11-22', 'general', 'President Gimenez', '',
  ARRAY[]::TEXT[],
  '{"number":0,"title":""}', '',
  '[]', true,
  '{"number":0,"title":""}',
  '[]',
  '{"number":0,"title":""}', ''
);
