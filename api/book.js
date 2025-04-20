import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

export default async (req, res) => {
    if (req.method === 'POST') {
        const { date, user } = req.body;
        const { data, error } = await supabase
            .from('reservations')
            .insert([{ date, user_name: user }]);

        return res.status(200).json(data);
    }

    return res.status(405).json({ error: 'Method not allowed' });
};