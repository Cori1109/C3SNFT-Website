import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [showImageUrl, setShowImageUrl] = useState("");

  useEffect(() => {
    const teamMembers = [
      {
        image: "image/team_6.jpg",
        name: "The Chief",
        info: "Founder",
      },
      {
        image: "image/team_2.jpg",
        name: "The Oracle",
        info: "Blockchainer",
      },
      {
        image: "image/the help(advisor)-01.jpg",
        name: "The Help",
        info: "Advisor",
      },
      {
        image: "image/team_3.jpg",
        name: "The Wizard",
        info: "Artist",
      },
      {
        image: "image/team_1.jpg",
        name: "The Guy",
        info: "Designer",
      },
      {
        image: "image/team_8.jpg",
        name: "The Connector",
        info: "Marketer",
      },
      {
        image: "image/team_4.jpg",
        name: "The Glue",
        info: "Socialbee",
      },
      {
        image: "image/The  backbon(discorder)-01.jpg",
        name: "The Backbone",
        info: "Discorder",
      },
    ];
    setTeamMembers(teamMembers);
  }, []);

  return (
    <div id="team" className="our-team pt-3 pb-5">
      <Container className="mt-5">
        <div className="text-center" style={{ marginBottom: -5 }}>
          <span className="our-team-title fontSize36">OUR TEAM</span>
        </div>
        <div className="text-center mb-4">
          {/* <span className="our-team-title-divider" /> */}
        </div>
        <div className="mb-3 subTxt">
          <p className="text-center text-white mb-0 fontSize16">
            The C3S is not a project but a venture with ambitious plans.
          </p>
          <p className="text-center text-white mt-4 fontSize16">
            It started with an idea from <b>the Chief</b> to develop a mobile
            application to create a more meaningful, connected bar experience.
            It has evolved to build a team of artists, entrepreneurs, and
            blockchain experts to carve a similar niche in the crypto and the
            NFT space.
          </p>
          <p className="text-center text-white mt-4 fontSize16">
            We are committed to delivering a cutting-edge experience and making
            this collection a success long-term.
          </p>
        </div>
        <Row className="our-team-members">
          {teamMembers.map((member, index) => {
            return (
              <Col
                xl={3}
                lg={3}
                md={4}
                sm={6}
                xs={6}
                xxs={12}
                key={"teamMember" + index}
                className="text-white pt-4 pb-4 cursor-pointer member-item"
              >
                <div>
                  <Image src={member.image} className="w-100" />
                  <div className="d-flex align-items-end justify-content-between mt-2">
                    <div>
                      <div style={{ fontSize: "smaller", fontWeight: "bold" }}>
                        {member.name}
                      </div>
                      <div style={{ fontSize: "smaller" }}>{member.info}</div>
                    </div>
                    {/* <div className="mb-1">
                      <span
                        className="team-member-nav-icon cursor-pointer"
                        style={{ marginRight: 8 }}
                      >
                        <FaLinkedinIn />
                      </span>
                      <span className="team-member-nav-icon">
                        <FaInstagram
                          onClick={() => {
                            setShowImageUrl(member.image);
                            setModalShow(true);
                          }}
                        />
                      </span>
                    </div> */}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Image src={showImageUrl} className="w-100"></Image>
      </Modal>
    </div>
  );
}
