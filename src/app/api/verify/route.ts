import { NextRequest, NextResponse } from 'next/server';

// 学生数据列表 - 只在服务器端，不会暴露给客户端
const students = [
  { firstName: 'jeremy', lastName: 'yang', code: '6248' },
  { firstName: 'ryan', lastName: 'yang', code: '2010' },
  { firstName: 'evan', lastName: 'yang', code: '2010' },
  { firstName: 'samuel', lastName: 'chang', code: '5623' },
  { firstName: 'jubilee', lastName: 'chang', code: '5623' },
  { firstName: 'tirzah', lastName: 'chang', code: '5623' },
  { firstName: 'chason', lastName: 'cai', code: '4079' },
  { firstName: 'elina', lastName: 'li', code: '6850' },
  { firstName: 'olivia', lastName: 'chen', code: '7729' },
  { firstName: 'grace', lastName: 'wang', code: '1327' },
  { firstName: 'thomas', lastName: '', code: '4281' },
  { firstName: 'oriana', lastName: '', code: '3856' },
  { firstName: 'ellie', lastName: 'peng', code: '1159' },
  { firstName: 'avery', lastName: 'man', code: '2837' },
  { firstName: 'mia', lastName: 'yang', code: '4962' },
  { firstName: 'ellie', lastName: 'tsai', code: '9218' },
  { firstName: 'leo', lastName: 'kamil', code: '0073' },
  { firstName: 'joy', lastName: 'wang', code: '5409' },
  { firstName: 'ezekiel', lastName: 'wang', code: '3712' },
  { firstName: 'lily', lastName: 'buczyna', code: '0105' },
  { firstName: 'ryan', lastName: 'gong', code: '2100' },
  { firstName: 'elizabeth', lastName: 'fu', code: '1318' },
  { firstName: 'angela', lastName: 'li', code: '0921' },
  { firstName: 'jocelyn', lastName: 'chen', code: '8658' },
  { firstName: 'owen', lastName: 'sun', code: '3905' },
  { firstName: 'jayden', lastName: 'lin', code: '2813' },
  { firstName: 'cindy', lastName: 'sun', code: '3905' },
  { firstName: 'summer', lastName: 'sun', code: '3905' },
  { firstName: 'ellie', lastName: 'liu', code: '5139' },
  { firstName: 'kathleen', lastName: 'xin', code: '7264' },
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, code } = body;

    // 验证输入
    if (!firstName || !code) {
      return NextResponse.json(
        { valid: false, error: '請提供 First Name 和代碼' },
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
        message: '驗證成功'
      });
    } else {
      return NextResponse.json({ 
        valid: false,
        error: '輸入的資訊不正確，請重新輸入。'
      });
    }
  } catch (error) {
    return NextResponse.json(
      { valid: false, error: '服務器錯誤，請稍後再試。' },
      { status: 500 }
    );
  }
}

