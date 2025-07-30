'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/Button';
import styles from '@/styles/Dashboard.module.scss';

const InfoRow = ({ icon, label, value }: { icon: string; label: string; value: string | number }) => (
    <div className={styles.infoRow}>
        <span className={styles.infoIcon}>{icon}</span>
        <span className={styles.infoLabel}>{label}:</span>
        <span className={styles.infoValue}>{value}</span>
    </div>
);

export default function DashboardPage() {
    const { user, loading, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/auth');
        }
    }, [user, loading, router]);

    if (loading || !user) {
        return <div className={styles.loader}>در حال بارگذاری...</div>;
    }

    const { name, location, email, login, dob, phone, picture } = user;
    const fullName = `${name.title} ${name.first} ${name.last}`;
    const fullAddress = `${location.street.number} ${location.street.name}, ${location.city}, ${location.state} ${location.postcode}`;

    return (
        <main className={styles.dashboardContainer}>
            <div className={styles.profileCard}>
                <div className={styles.cardHeader}>
                    <Image
                        src={picture.large}
                        alt={`Avatar of ${fullName}`}
                        width={120}
                        height={120}
                        className={styles.avatar}
                        priority
                    />
                    <h1 className={styles.fullName}>{fullName}</h1>
                    <p className={styles.username}>@{login.username}</p>
                </div>
                <div className={styles.cardBody}>
                    <InfoRow icon="📧" label="ایمیل" value={email} />
                    <InfoRow icon="📞" label="تلفن" value={phone} />
                    <InfoRow icon="🎂" label="سن" value={dob.age} />
                    <InfoRow icon="📍" label="آدرس" value={fullAddress} />
                </div>
                <div className={styles.cardFooter}>
                    <Button onClick={logout}>خروج از حساب کاربری</Button>
                </div>
            </div>
        </main>
    );
}
