import { z } from 'zod';

export const authSchema = z.object({
    phone: z
        .string()
        .min(1, { message: 'شماره موبایل الزامی است.' })
        .regex(/^09\d{9}$/, { message: 'لطفا یک شماره موبایل معتبر وارد کنید.' }),
});