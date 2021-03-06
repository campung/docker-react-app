import React from "react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

const TheHeaderDropdown = () => {
  const user = useSelector((state) => state.user);
  let history = useHistory();

  const onLogout = () => {
    if (user.storeData) {
      axios.post("/v1/stores/logout").then((response) => {
        if (response) {
          alert(response.data.message);
          history.push("/login");
        } else {
          alert("로그인을 해주세요.");
        }
      });
    } else {
      alert("로그인을 해주세요.");
    }
  };

  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      {/* 사용자 계정 */}
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        {/* {user.storeData && user ? (
          <>
            <div className="c-avatar">
              <CImg
                src={"avatars/6.jpg"}
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
              />
            </div>
            {user.storeData.name && user.storeData.name}
          </>
        ) : (
          <div>1</div>
        )} */}

        {user && user.storeData.name === "Error" ? (
          <Link to="/login">로그인을 해주세요</Link>
        ) : (
          <>
            <div className="c-avatar"></div>
            <span>{user.storeData.name}</span>

            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem
                header
                tag="div"
                color="light"
                className="text-center"
              >
                <strong>Account</strong>
              </CDropdownItem>

              <CDropdownItem>
                <CIcon name="cil-task" className="mfe-2" />
                <Link to="/product/productSale">상품</Link>
              </CDropdownItem>
              <CDropdownItem>
                <CIcon name="cil-comment-square" className="mfe-2" />
                <Link to="/review">댓글</Link>
              </CDropdownItem>
              <CDropdownItem
                header
                tag="div"
                color="light"
                className="text-center"
              >
                <strong>Settings</strong>
              </CDropdownItem>
              {/* <CDropdownItem>
                <CIcon name="cil-user" className="mfe-2" />
                Profile
              </CDropdownItem> */}

              <CDropdownItem>
                <CIcon name="cil-credit-card" className="mfe-2" />
                정산
              </CDropdownItem>

              <CDropdownItem divider />
              <CDropdownItem onClick={onLogout}>
                <CIcon name="cil-lock-locked" className="mfe-2" />
                로그아웃
              </CDropdownItem>
            </CDropdownMenu>
          </>
        )}
      </CDropdownToggle>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
