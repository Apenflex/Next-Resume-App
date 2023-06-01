import sgMail from '@sendgrid/mail'

export default async function sendEmail(req, res) {
    if (req.method !== 'POST') {
        res.status(405).end()
        return
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY || 'defaultKey')
    // console.log('req.body', req.body)
    const { email, message } = req.body

    if (!email || !message) {
        res.status(401).json({ error: 'Missing email or message' })
        return
    }

    const msg = {
        to: 'blackdbf@gmail.com',
        from: 'blackdbf@gmail.com',
        subject: 'Hello from CV',
        text: `You got message: ${message} from ${email}`,
    }

    try {
        await sgMail.send(msg)
        res.status(200).end()
    } catch (error) {
        console.log('ERROR', error)
        res.status(400).send('Message not sent.')
    }
}