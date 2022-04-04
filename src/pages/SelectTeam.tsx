import React, { Fragment } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTeam, Team } from "../components/redux/gameSlice";

const SelectTeam = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="select-team">
        <h1>Select Team</h1>
        <br />
        <Row>
          <Button
            onClick={(e: React.MouseEventHandler) => {
              dispatch(selectTeam(Team.BLUE));
              navigate("/game");
            }}
            md={{ span: 3 }}
            size="lg"
            variant="primary"
          >
            Blue Team
          </Button>
          <Button
            onClick={(e: React.MouseEventHandler) => {
              dispatch(selectTeam(Team.RED));
              navigate("/game");
            }}
            md={{ offset: 2, span: 3 }}
            size="lg"
            variant="danger"
          >
            Red Team
          </Button>
        </Row>
      </div>
    </Fragment>
  );
};

export default SelectTeam;
