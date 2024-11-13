import classNames from "classnames/bind";

import styles from "./GroupSelect.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

const GroupList = [
  {
    id: 1,
    ten: "Thời trang",
  },
  {
    id: 2,
    ten: "Điện thoại phụ kiện",
  },
  {
    id: 3,
    ten: "Thiết bị điện tử",
  },
  {
    id: 4,
    ten: "Đồng hồ",
  },
  {
    id: 5,
    ten: "Giầy dép",
  },
];

function GroupSelect() {
  const [selected, setSelected] = useState(0);

  const handleSelect = (event) => {
    setSelected(+event.target.value); 
  };

  return (
    <div className={cx("wrapper")}>
      <h2>Chọn nhóm sản phẩm:</h2>
      <div className={cx("categories")}>
        <button
          key={0}
          type="button"
          className={cx({ "selected": selected === 0 })}
          value={0}
          onClick={handleSelect}
        >
          Tất cả
        </button>
        {GroupList.map((group) => (
          <button
            key={group.id}
            type="button"
            className={cx({ "selected": selected === group.id })}
            value={group.id}
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
