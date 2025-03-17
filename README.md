# SmartSpend 

SmartSpend เป็นเว็บแอปพลิเคชันสำหรับบริหารจัดการการเงินส่วนบุคคล ที่ช่วยให้ผู้ใช้สามารถติดตามธุรกรรม วิเคราะห์การใช้จ่าย และตั้งเป้าหมายการออมได้ง่ายๆ

**สามารถทดลองใช้งานที่นี่**: [SmartSpend](https://smart-spend-v2.vercel.app)

## คุณสมบัติหลัก

-  **Dashboard** - สรุปภาพรวมทางการเงินของผู้ใช้
-  **แปลงสกุลเงิน** - รองรับการแปลงค่าเงินอัตโนมัติ
-  **กราฟสรุปยอดเงิน** - ดูแนวโน้มการใช้จ่ายและการออม
-  **บันทึกธุรกรรม** - เพิ่ม แก้ไข และลบรายการธุรกรรม
-  **ตั้งเป้าหมายออมเงิน** - กำหนดและติดตามความคืบหน้าของเป้าหมายการออม
-  **ระบบ Authentication** - ลงทะเบียนและเข้าสู่ระบบอย่างปลอดภัย

## เทคโนโลยีที่ใช้

- **Frontend**: React + Vite + TypeScript
- **UI Framework**: Tailwind CSS, shadcn/ui
- **State Management**: React Hooks
- **Authentication**: Firebase
- **API**: ใช้บริการ API ภายนอก คือ ExchangeRate-API

## โครงสร้างโฟลเดอร์เบื้องต้น

📂 src

├── 📂 components (ที่สร้างขึ้นเอง)

│ └── 📂 ui (องค์ประกอบ UI เช่น button, input, dropdown เป็นต้น)

├── 📂 pages (หน้าหลักของแอป เช่น Dashboard, TransactionPage)

├── 📂 lib (Utility functions และ Hooks)

└── 📂 services (จัดการ API และข้อมูล เช่น budgetService.ts, transactionService.ts)


## การติดตั้งและใช้งาน
1. **ติดตั้ง dependencies**  
   ```sh
   npm install

2. **การรัน server**
   ```sh
   npm run dev

3. เปิดเบราว์เซอร์และไปที่ http://localhost:5173
