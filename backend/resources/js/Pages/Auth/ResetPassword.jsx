import '@/../css/Pages/Auth/ResetPassword.scss';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ResetPassword({
    meta_title,
    meta_description,
    meta_keywords,
    errors,
    email,
    token,
}) {
    const { t } = useTranslation('reset_password');

    const [values, setValues] = useState({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const handleChange = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.id]: e.target.value,
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        router.post(route('password.store'), values);
    };

    return (
        <GuestLayout>
            <div id="form">
                <form onSubmit={submit}>
                    <h1>{t('title')}</h1>
                    <p>{Object.values(errors)[0]}</p>
                    <input
                        id="email"
                        type="text"
                        placeholder={t('email')}
                        value={values.email}
                        onChange={handleChange}
                    />
                    <input
                        id="password"
                        type="password"
                        placeholder={t('password')}
                        value={values.password}
                        onChange={handleChange}
                    />

                    <input
                        id="password_confirmation"
                        type="password"
                        placeholder={t('password_confirmation')}
                        value={values.password_confirmation}
                        onChange={handleChange}
                    />
                    <button type="submit">{t('submit')}</button>
                </form>
            </div>
        </GuestLayout>
    );
}
