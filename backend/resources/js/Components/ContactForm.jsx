import '@/../css/Components/ContactForm.scss';
import { useForm } from '@inertiajs/react';

export default function ContactForm({ t }) {
    const { data, setData, post, errors } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('contact'), data);
    };

    if (Object.values(errors).length > 0) {
        document
            .getElementById('subject')
            .scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div id="contact">
            <h2>{t('section4.h2')}</h2>
            <form onSubmit={submit}>
                <p className={Object.values(errors).length > 0 ? 'show' : ''}>
                    {Object.values(errors)[0]}
                </p>
                <div>
                    <input
                        type="text"
                        id="name"
                        placeholder={t('name')}
                        value={data.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        id="email"
                        placeholder={t('email')}
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>
                <input
                    type="text"
                    id="subject"
                    placeholder={t('subject')}
                    value={data.subject}
                    onChange={handleChange}
                />

                <textarea
                    id="message"
                    placeholder={t('message')}
                    value={data.message}
                    onChange={handleChange}
                ></textarea>

                <button type="submit">{t('send_message')}</button>
            </form>
        </div>
    );
}
