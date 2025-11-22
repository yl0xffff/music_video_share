import { NextRequest, NextResponse } from 'next/server';

// 学生数据列表 - 只在服务器端，不会暴露给客户端
const students = [
  { firstName: 'jeremy', lastName: 'yang', code: '6248', link: 'https://drive.google.com/file/d/1fNfNqn7AMT0Y3C7tIMFqlvSjkH144SMz/view?usp=drive_link' },
  { firstName: 'ryan', lastName: 'yang', code: '2010', link: 'https://drive.google.com/file/d/1nr0bsZvJNfAI_C5o9viUFl8FaORwTlpX/view?usp=drive_link' },
  { firstName: 'evan', lastName: 'yang', code: '2010', link: 'https://drive.google.com/file/d/1nr0bsZvJNfAI_C5o9viUFl8FaORwTlpX/view?usp=drive_link' },
  { firstName: 'samuel', lastName: 'chang', code: '5623', link: 'https://drive.google.com/file/d/19P1o3LMtfH3qs7sLYnX-78iNtws7Hx39/view?usp=drive_link' },
  { firstName: 'jubilee', lastName: 'chang', code: '5623', link: 'https://drive.google.com/file/d/1ZI9x7nryJpB5jR5U80E0KafiYWO8LB2n/view?usp=drive_link' },
  { firstName: 'tirzah', lastName: 'chang', code: '5623', link: 'https://drive.google.com/file/d/1K8AfZiaNcFw8N3fo9Or0vkxL5LlVwH3C/view?usp=drive_link' },
  { firstName: 'chason', lastName: 'cai', code: '4079', link: 'https://drive.google.com/file/d/1Yrso1VOXPRrYsVNRDqt-p3ebEBcf4hJp/view?usp=drive_link' },
  { firstName: 'elina', lastName: 'li', code: '6850', link: 'https://drive.google.com/file/d/1Pm53a0CDZy5SquzBa3qZZgqIJ8G4f1qg/view?usp=drive_link' },
  { firstName: 'olivia', lastName: 'chen', code: '7729', link: 'https://drive.google.com/file/d/1a80JOELnMEstjA2x4d1_eK6ZqcImPxa1/view?usp=drive_link' },
  { firstName: 'grace', lastName: 'wang', code: '1327', link: 'https://drive.google.com/file/d/1IQjbwPrMvugEVVLgGO84dyz5opFu7CQS/view?usp=drive_link' },
  { firstName: 'thomas', lastName: '', code: '4281', link: 'https://drive.google.com/file/d/1MdzNV6xVaiaHo7FX7xsNE2m2tOsOCNdp/view?usp=drive_link' },
  { firstName: 'oriana', lastName: '', code: '3856', link: 'https://drive.google.com/file/d/1p51i9M5lcKiceK94P4nNQf_J7BIC-gBt/view?usp=sharing' },
  { firstName: 'ellie', lastName: 'peng', code: '1159', link: 'https://drive.google.com/file/d/1pvMZoQCcMFuqFlM-as4oIyh5eV1Hp7xy/view?usp=drive_link' },
  { firstName: 'avery', lastName: 'man', code: '2837', link: 'https://drive.google.com/file/d/1Fq6wb2CiHtWbGiEszP1IC3QbeWb1wlGq/view?usp=drive_link' },
  { firstName: 'mia', lastName: 'yang', code: '4962', link: 'https://drive.google.com/file/d/13LMSwYVF8-CNRc_IKkNDmpbL2MAJ_Iim/view?usp=drive_link' },
  { firstName: 'ellie', lastName: 'tsai', code: '9218', link: 'https://drive.google.com/file/d/17zjshddRKDUElsrNTvvcbcRhJsg83MUP/view?usp=drive_link' },
  { firstName: 'leo', lastName: 'kamil', code: '0073', link: 'https://drive.google.com/file/d/1U0uJCyByGtV0oGJ-IdpDgQHASBeJRwU7/view?usp=drive_link' },
  { firstName: 'joy', lastName: 'wang', code: '5409', link: 'https://drive.google.com/file/d/1PFyyaludyy5xccn5mKaCrLn2ainKYgfz/view?usp=drive_link' },
  { firstName: 'ezekiel', lastName: 'wang', code: '3712', link: 'https://drive.google.com/file/d/1kRL8Y8te_DwjmvNi751WmjJwa4NdYk6j/view?usp=drive_link' },
  { firstName: 'lily', lastName: 'buczyna', code: '0105', link: 'https://drive.google.com/file/d/12O4C2Hz2UllpDyZ44B82rrNe6WmF4q15/view?usp=drive_link' },
  { firstName: 'ryan', lastName: 'gong', code: '2100', link: 'https://drive.google.com/file/d/1CER0nh51ZHcBZ2-2shsCpUsGyewC-jVb/view?usp=drive_link' },
  { firstName: 'elizabeth', lastName: 'fu', code: '1318', link: 'https://drive.google.com/file/d/13S-G3-MRBbta8IiyWv3mULxUxXn5LVMu/view?usp=drive_link' },
  { firstName: 'angela', lastName: 'li', code: '0921', link: 'https://drive.google.com/file/d/1LjC7zNxeHBvBkfpm-fwrYlZ1qrQB-BCv/view?usp=drive_link' },
  { firstName: 'jocelyn', lastName: 'chen', code: '8658', link: 'https://drive.google.com/file/d/1LjC7zNxeHBvBkfpm-fwrYlZ1qrQB-BCv/view?usp=drive_link' },
  { firstName: 'owen', lastName: 'sun', code: '3905', link: 'https://drive.google.com/file/d/1rIlW-RLikdfBGxQHyO9EqNdsN2fjuZDX/view?usp=drive_link' },
  { firstName: 'jayden', lastName: 'lin', code: '2813', link: 'https://drive.google.com/file/d/1h6j_nm4I1aA1dPY8AZQubJv8PgYDlu1Y/view?usp=drive_link' },
  { firstName: 'cindy', lastName: 'sun', code: '3905', link: 'https://drive.google.com/file/d/1l5LR1ez9fE6njGeG-bGzXVAjie-DG6Dx/view?usp=drive_link' },
  { firstName: 'summer', lastName: 'sun', code: '3905', link: 'https://drive.google.com/file/d/1hNsiWRcZMVPpZ7EXZ3wQqV7gbmx7pdbh/view?usp=drive_link' },
  { firstName: 'ellie', lastName: 'liu', code: '5139', link: 'https://drive.google.com/file/d/1VbtAXdDlMsYbxm6MGJteqrvUhE3_yzot/view?usp=drive_link' },
  { firstName: 'kathleen', lastName: 'xin', code: '7264', link: 'https://drive.google.com/file/d/1PNGnBee5FXEgBNdnVR3Rf_FOP-I4P_Jy/view?usp=drive_link' },
  { firstName: 'vicky', lastName: 'lv', code: '1146', link: 'https://drive.google.com/drive/folders/1f66-DbSNARtRBBz3IwoJ1BdKARqMBb0e?usp=drive_link' },
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, code } = body;

    // 验证输入
    if (!firstName || !code) {
      return NextResponse.json(
        { valid: false, error: '請提供 First Name 和代碼 / Please provide First Name and Code' },
        { status: 400 }
      );
    }

    // 标准化输入（不区分大小写）
    const normalizedFirstName = firstName.trim().toLowerCase();
    const normalizedLastName = (lastName || '').trim().toLowerCase();
    // 确保代码是4位数字（补零）
    const normalizedCode = code.trim().padStart(4, '0');

    // 查找匹配的学生
    const matchedStudent = students.find((student) => {
      const firstNameMatch = student.firstName === normalizedFirstName;
      const lastNameMatch = student.lastName === normalizedLastName || 
                           (student.lastName === '' && normalizedLastName === '');
      const codeMatch = student.code === normalizedCode;
      
      return firstNameMatch && lastNameMatch && codeMatch;
    });

    if (matchedStudent) {
      return NextResponse.json({ 
        valid: true,
        message: '驗證成功 / Verification successful',
        link: matchedStudent.link
      });
    } else {
      return NextResponse.json({ 
        valid: false,
        error: '輸入的資訊不正確，請重新輸入。 / The information entered is incorrect, please try again.'
      });
    }
  } catch (error) {
    return NextResponse.json(
      { valid: false, error: '服務器錯誤，請稍後再試。 / Server error, please try again later.' },
      { status: 500 }
    );
  }
}

