import sertifJava from "../../../../../assets/sertifjava.jpg";
import sertifBangkit from "../../../../../assets/sertifbangkit.jpg";

export interface ProfessionalType {
  id: number;
  role: string;
  company: string;
  status: string;
  duration: string;
  description: string;
  certificate?: string[];
  techStack: string[];
}

export const professionalData: ProfessionalType[] = [
  {
    id: 1,
    role: "Front End Developer Intern",
    company: "Kemas Foundation",
    status: "Magang",
    duration: "Des 2025 - Sekarang",
    description:
      "Mengembangkan aplikasi admin berbasis Android secara end-to-end. Fokus utama pengembangan meliputi perancangan sistem autentikasi, manajemen daftar pengguna, serta implementasi fitur verifikasi KTP elektronik untuk memastikan validitas data. Selama proses magang ini, saya juga mendalami manajemen state pada Jetpack Compose dan menerapkan pola arsitektur MVVM agar kode lebih bersih, mudah di-maintenance, dan siap untuk pengembangan skala yang lebih besar.",
    certificate: [],
    techStack: ["Android Jetpack Compose", "MVVM", "Figma", "Retrofit"],
  },
  {
    id: 2,
    role: "Backend Java",
    company: "SYNRGY Academy",
    status: "Bootcamp",
    duration: "Aug 2023 - March 2024",
    description:
      "Mengikuti bootcamp intensif dengan fokus pada pengembangan backend menggunakan Java Spring Boot. Selama program, saya mempelajari REST API, Spring Data JPA, Hibernate, dan JWT Authentication, serta menerapkan unit testing dengan JUnit & MockMvc. Pengalaman ini juga membekali saya dengan praktik kolaborasi menggunakan Git/GitHub dan code review.",
    certificate: [sertifJava],
    techStack: ["SpringBoot", "JPA"],
  },
  {
    id: 3,
    role: "Mobile Application Developer",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    status: "MSIB",
    duration: "Feb 2023 - Jul 2023",
    description:
      "Saya terpilih sebagai peserta Bangkit Academy 2023 dengan learning path Mobile Development. Program ini membawa saya dari pemula hingga tingkat lanjut dalam pengembangan aplikasi Android menggunakan Kotlin, Android Jetpack, API integration, dan Firebase. Pada tahap akhir, saya berkolaborasi lintas disiplin (Mobile, Machine Learning, Cloud Computing) dalam mengembangkan aplikasi iFiCam, yang berhasil masuk Top 65 Capstone Project terbaik Bangkit Academy 2023. Pengalaman ini melatih saya dalam teamwork, problem solving, serta membangun aplikasi end-to-end dengan teknologi terkini.",
    certificate: [sertifBangkit],
    techStack: [
      "Android Development",
      "UI/UX",
      "MVVM",
      "Fundamental",
      "Firebase",
      "Retrofit",
    ],
  },
];