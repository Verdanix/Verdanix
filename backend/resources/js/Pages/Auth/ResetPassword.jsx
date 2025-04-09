import '@/../css/Pages/Auth/ResetPassword.scss';
import Navbar from '@/Components/Navbar.jsx';
import Text from '@/Components/Sections/Text.jsx';
import { useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const { t } = useTranslation('reset_password');
    const onChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    const getH3Message = () => {
        const errors2 = Object.values(errors);
        if (errors2.length >= 1) {
            return errors2[0];
        }

        return t('p');
    };

    return (
        <div id="reset-password">
            <Navbar view="reset" />
            <div className="content">
                <form onSubmit={submit} className="model">
                    <Text type="h2">{t('h2')}</Text>
                    <Text type="h3">{getH3Message()}</Text>
                    <input
                        type="password"
                        id="password"
                        placeholder={t('password')}
                        value={data.password}
                        onChange={onChange}
                    />
                    <input
                        type="password"
                        id="password_confirmation"
                        placeholder={t('password_confirmation')}
                        value={data.password_confirmation}
                        onChange={onChange}
                    />
                    <button type="submit">{t('submit')}</button>
                </form>
            </div>
        </div>
    );
}
