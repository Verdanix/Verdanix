import '@/../css/Pages/Auth/ResetPassword.scss';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function ResetPassword({ email, token }) {
    const { t } = useTranslation('reset_password');

    const { data, setData, post, errors } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('password.store'), data);
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
                    <input
                        id="password"
                        type="password"
                        placeholder={t('password')}
                        value={data.password}
                        onChange={handleChange}
                    />

                    <input
                        id="password_confirmation"
                        type="password"
                        placeholder={t('password_confirmation')}
                        value={data.password_confirmation}
                        onChange={handleChange}
                    />
                    <button type="submit">{t('submit')}</button>
                </form>
            </div>
        </GuestLayout>
    );
}
