import {
    UserOutlined,
} from '@ant-design/icons';

export const Menu = [
    {
        key: '1',
        icon: <UserOutlined />,
        label: 'Nhân viên',
        children: [
            {
                key: '1-1',
                label: 'Danh sách',
            },
        ]
    },
]