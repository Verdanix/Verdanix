import '@/../css/Pages/Auth/Register.scss';
import GuestLayout from '@/Layouts/GuestLayout';
import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Login() {
    const { t } = useTranslation(['register']);
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        remember: false,
    });

    const handleChange = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.id]: e.target.value,
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        router.post('/register', values);
    };

    return (
        <GuestLayout>
            <div id="form">
                <form onSubmit={submit}>
                    <h1>{t('register.title')}</h1>
                    <p>{Object.values(errors)[0]}</p>
                    <input
                        id="name"
                        type="text"
                        placeholder={t('name')}
                        value={values.name}
                        onChange={handleChange}
                    />
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
                    <button type="submit">{t('submit')}</button>
                    <div className="loginOptions">
                        <a href="/login">{t('login')}</a>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
