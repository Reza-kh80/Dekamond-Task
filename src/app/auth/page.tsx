'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema } from '@/lib/schemas';
import { useAuth } from '@/hooks/useAuth';
import Input from '@/components/Input';
import Button from '@/components/Button';
import styles from '@/styles/Auth.module.scss';

type FormData = {
    phone: string;
};

export default function AuthPage() {
    const { login, loading } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(authSchema),
    });

    const handleLogin = async () => {
        await login();
    };

    return (
        <main className={styles.authContainer}>
            <div className={styles.authBox}>
                <h1>ورود به پنل کاربری</h1>
                <p>لطفا برای ورود شماره موبایل خود را وارد کرده و روی دکمه ورود کلیک کنید.</p>
                <form onSubmit={handleSubmit(handleLogin)} className={styles.form}>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="مثلا 09123456789"
                        error={errors.phone?.message}
                        {...register('phone')}
                    />
                    <Button type="submit" disabled={loading}>
                        {loading ? 'در حال ورود...' : 'ورود'}
                    </Button>
                </form>
            </div>
        </main>
    );
}