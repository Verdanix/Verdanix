import '@/../css/Pages/Auth/ForgotPassword.scss';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function ForgotPassword() {
    const { t } = useTranslation('forgot_password');

    const { data, setData, post, errors } = useForm({
        email: '',
    });

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'), data);
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
                        value={data.email}
                        onChange={handleChange}
                    />
                    <button type="submit">{t('submit')}</button>
                    <div className="loginOptions">
                        <a href="/login">{t('login')}</a>
                        <a href="/register">{t('register')}</a>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
