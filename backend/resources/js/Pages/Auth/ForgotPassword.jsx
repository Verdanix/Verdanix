import '@/../css/Pages/Auth/ForgotPassword.scss';
import Navbar from '@/Components/Navbar.jsx';
import Text from '@/Components/Sections/Text.jsx';
import { useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function ForgotPassword({ status }) {
    const { data, setData, post, errors } = useForm({
        email: '',
    });

    const { t } = useTranslation('forgot_password');

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    const getH3Message = () => {
        if (status) {
            return status;
        }

        if (errors.email) {
            return errors.email;
        }

        return t('p');
    };
    return (
        <div id="forgot-password">
            <Navbar view="forgot" />
            <div className="content">
                <form onSubmit={submit} className="model">
                    <Text type="h2">{t('h2')}</Text>
                    <Text type="h3">{getH3Message()}</Text>
                    <input
                        type="text"
                        id="email"
                        placeholder={t('email')}
                        defaultValue={data.email}
                        onChange={handleChange}
                    />
                    <button type="submit">{t('submit')}</button>
                </form>
            </div>
        </div>
    );
}
