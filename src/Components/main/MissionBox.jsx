import React from "react";
import styled from "styled-components";
import { useState } from "react";

import { IoWater } from "react-icons/io5";
import { BiWalk } from "react-icons/bi";
import { CgPill } from "react-icons/cg";
import { ImSpoonKnife } from "react-icons/im";

export default function MissionBox({ onComplete }) {
  return (
    <BoxWrapper>
      <Box bg="salmon" style={{ padding: "30px 50px" }}>
        <BiWalk className="boxIcon" />
        <div>30분 이상 걷기</div>
        <Btn
          onClick={() => {
            onComplete(0);
          }}
        >
          완료
        </Btn>
      </Box>
      <Box bg="#f2af50" style={{ padding: "30px 50px" }}>
        <ImSpoonKnife size="55" style={{ color: "white", marginTop: "10px" }} />
        <div>
          세끼 <br />
          식사하기
        </div>
        <Btn
          onClick={() => {
            onComplete(1);
          }}
        >
          완료
        </Btn>
      </Box>
      <Box bg="#87cc5c">
        <IoWater className="boxIcon" />
        <div>물 마시기</div>
        <Btn
          onClick={() => {
            onComplete(2);
          }}
        >
          완료
        </Btn>
        {/* <div style={{ fontSize: "15px", padding: "10px" }}>
      자세히
    </div> */}
      </Box>
      <Box bg="#5ccca5">
        <CgPill className="boxIcon" />
        <div>약 복용하기</div>
        <Btn
          onClick={() => {
            onComplete(3);
          }}
        >
          완료
        </Btn>
      </Box>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 950px;
  padding: 20px 0;
  justify-content: center;
`;

const Box = styled.div`
  background-color: ${(props) => props.bg};
  border-radius: 10px;
  width: 270px;
  height: 270px;
  padding: 50px;
  justify-content: center;
  align-items: center;
  margin: 20px;

  .boxIcon {
    color: white;
    width: 70px;
    height: 70px;
  }

  & > div {
    color: white;
    font-size: 24px;
    padding: 20px;
  }
`;

const Btn = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 3px;
  font-size: 16px;
`;