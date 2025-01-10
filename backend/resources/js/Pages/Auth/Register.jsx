import '@/../css/Pages/Auth/Register.scss';
import GuestLayout from '@/Layouts/GuestLayout';
import { useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Login() {
    const { t } = useTranslation(['register']);

    const { data, setData, post, errors } = useForm({
        name: '',
        email: '',
        password: '',
        remember: false,
    });

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), data);
    };

    return (
        <GuestLayout view="register">
            <div id="form">
                <form onSubmit={submit}>
                    <h1>{t('title')}</h1>
                    <p>{Object.values(errors)[0]}</p>
                    <input
                        id="name"
                        type="text"
                        placeholder={t('name')}
                        value={data.name}
                        onChange={handleChange}
                    />
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
                    <button type="submit">{t('submit')}</button>
                    <div className="loginOptions">
                        <a href="/login">{t('login')}</a>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
