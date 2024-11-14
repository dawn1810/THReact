import classNames from 'classnames/bind';

import styles from './GroupSelect.module.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCookie } from '../../lib/function';

const cx = classNames.bind(styles);

function GroupSelect() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(0);
    const [groupList, setGroupList] = useState();

    useEffect(() => {
        const getGroupList = async () => {
            const token = getCookie('jwt');
            const response = await fetch('http://localhost:8000/api/getGroupList', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            const groupRes = await response.json();
            if (groupRes.EC === '200') {
                setGroupList(groupRes.DT);
            } else if (groupRes.EC === '401') {
                navigate('/login');
            } else if (groupRes.EC === '500') {
                alert('Lỗi hệ thông');
            }
        };

        getGroupList();
    }, []);

    const handleSelect = (event) => {
        setSelected(+event.target.value);
        navigate('?id=' + event.target.value);
    };

    return (
        <div className={cx('wrapper')}>
            <h2>Chọn nhóm sản phẩm:</h2>
            <div className={cx('categories')}>
                <button
                    key={0}
                    type="button"
                    className={cx({ selected: selected === 0 })}
                    value={0}
                    onClick={handleSelect}
                >
                    Tất cả
                </button>
                {groupList &&
                    groupList.map((group) => (
                        <button
                            key={group.idnhom}
                            type="button"
                            className={cx({ selected: selected === group.idnhom })}
                            value={group.idnhom}
                            onClick={handleSelect}
                        >
                            {group.ten}
                        </button>
                    ))}
            </div>
        </div>
    );
}

export default GroupSelect;
