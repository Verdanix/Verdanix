import '@/../css/Pages/Auth/Register.scss';
import Footer from '@/Components/Footer.jsx';
import Navbar from '@/Components/Navbar.jsx';
import Text from '@/Components/Sections/Text.jsx';
import { useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

function RegisterForm({ t }) {
    const { data, setData, post, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm: '',
        remember: false,
    });

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('auth.post.register'), data);
    };
    return (
        <form id="create" onSubmit={submit}>
            <Text type="h2">{t('register.h2')}</Text>
            <Text
                type="p"
                className={Object.values(errors).length > 0 ? 'show' : 'hide'}
            >
                {Object.values(errors)[0]}
            </Text>
            <div className="content">
                <div className="names">
                    <div className="name">
                        <label htmlFor="first_name">
                            {t('register.fields.first.label')}
                        </label>
                        <input
                            id="first_name"
                            type="text"
                            value={data.first}
                            onChange={handleChange}
                            placeholder={t('register.fields.first.placeholder')}
                        />
                    </div>

                    <div className="name">
                        <label htmlFor="last_name">
                            {t('register.fields.last.label')}
                        </label>
                        <input
                            id="last_name"
                            type="text"
                            value={data.last}
                            onChange={handleChange}
                            placeholder={t('register.fields.last.placeholder')}
                        />
                    </div>
                </div>

                <label htmlFor="email">
                    {t('register.fields.email.label')}
                </label>
                <input
                    id="email"
                    type="email"
                    autoComplete="new-email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder={t('register.fields.email.placeholder')}
                />
                <label htmlFor="password">
                    {t('register.fields.password.label')}
                </label>
                <input
                    id="password"
                    type="password"
                    value={data.password}
                    autoComplete="new-password"
                    onChange={handleChange}
                    placeholder={t('register.fields.password.placeholder')}
                />
                <label htmlFor="confirm">
                    {t('register.fields.confirm.label')}
                </label>
                <input
                    id="confirm"
                    type="password"
                    autoComplete="new-password"
                    value={data.confirm}
                    onChange={handleChange}
                    placeholder={t('register.fields.confirm.placeholder')}
                />
                <button type="submit">{t('register.submit')}</button>
            </div>
        </form>
    );
}

function LoginForm({ t, unverified }) {
    const { data, setData, post, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleChange = (e) => {
        e.target.id = e.target.id.replace('-', '');
        setData(e.target.id, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('auth.post.login'), data);
    };

    const getSocialButton = (provider) => {
        return (
            <a
                className={`social ${provider}`}
                href={route('auth.socialite.redirect', provider)}
            >
                <img
                    src={t(`login.fields.${provider}.icon`)}
                    alt={t(`login.fields.${provider}.alt`)}
                />
                <Text type="p">{t(`login.fields.${provider}.label`)}</Text>
            </a>
        );
    };

    if (unverified) {
        errors.email = t('unverified');
    }
    return (
        <form id="login" onSubmit={submit}>
            <Text type="h2">{t('login.h2')}</Text>
            <Text
                type="p"
                className={Object.values(errors).length > 0 ? 'show' : 'hide'}
            >
                {Object.values(errors)[0]}
            </Text>
            {getSocialButton('google')}
            {getSocialButton('linkedin')}
            {getSocialButton('github')}

            <div className="content">
                <label htmlFor="-email">
                    {t('register.fields.email.label')}
                </label>
                <input
                    id="-email"
                    type="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder={t('register.fields.email.placeholder')}
                />
                <label htmlFor="-password">
                    {t('register.fields.password.label')}
                </label>
                <input
                    id="-password"
                    type="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder={t('register.fields.password.placeholder')}
                />
                <div className="options">
                    <div className="checkbox">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">
                            {t('login.fields.remember.label')}
                        </label>
                    </div>
                    <a href={route('password.request')}>
                        {t('login.fields.forgot.label')}
                    </a>
                </div>
                <button type="submit">{t('login.submit')}</button>
            </div>
        </form>
    );
}

export default function Register({ unverified }) {
    const { t } = useTranslation(['register']);

    return (
        <div id="register">
            <Navbar view="register" />
            <div className="forms">
                <LoginForm t={t} unverified={unverified} />
                <RegisterForm t={t} />
            </div>
            <Footer />
        </div>
    );
}
