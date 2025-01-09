import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';

export default function Dashboard() {
    return (
        <AuthenticatedLayout view={'manage'}></AuthenticatedLayout>
    );
}
