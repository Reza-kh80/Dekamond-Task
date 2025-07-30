import Link from 'next/link';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        تسک شرکت <span>دکاموند</span>
      </h1>

      <p className={styles.subtitle}>
        پروژه نمونه برای پیاده‌سازی جریان احراز هویت با استفاده از Next.js، TypeScript و SCSS.
        برای شروع، روی دکمه زیر کلیک کنید.
      </p>

      <Link href="/auth" className={styles.ctaButton}>
        ورود به پنل کاربری
      </Link>
    </div>
  );
}
