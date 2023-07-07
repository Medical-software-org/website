import React from "react";
import { globalColors } from "../colors";
import { Helmet } from "react-helmet-async";

function privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="We care about your privacy and the security of our applications, read our privacy policy to find out more."
        />
      </Helmet>
      <div
        className="center-container"
        style={{ color: globalColors.blue, padding: 10 }}
      >
        <h1 className="is-size-2 has-text-weight-semibold">Privacy Policy</h1>
        <h4 className="is-size-4 has-text-weight-semibold">
          About this Policy
        </h4>
        <p>
          This Privacy Notice explains what happens with any personal data we
          gather from you in relation to:
        </p>
        <ul>
          <li>your use of this website</li>
          <li>your use of one of our software products</li>
          <li>any customer service or other enquiries you submit to us</li>
        </ul>
        <p>
          We recognise our obligations under data protection legislation, and we
          are committed to keeping your personal data safe and secure. <br />
          You should read this Privacy Notice so that you understand how we will
          handle your personal data. <br />
          Our aim is to only use and hold your personal data in ways that you
          would reasonably expect us to. <br />
          We reserve the right to amend this Privacy Notice from time to time.
          If we amend this Privacy Notice we will make you aware of this via
          updates posted on our website. <br />
        </p>
        <h4 className="is-size-4 has-text-weight-semibold">
          What personal data do we gather about you?
        </h4>
        <p>
          "Personal data" is any information about an individual from which that
          individual can be identified. It does not include data from which an
          individual cannot be identified, for example anonymised data.
          <br />
          The types of personal data we may collect, use, store and transfer in
          relation to you may consist of the following:
        </p>
        <table>
          <tr>
            <th>Data Subject</th>
            <th>Types of Personal Data</th>
          </tr>

          <tr>
            <td>Website visitor/user</td>
            <td>IP adress</td>
          </tr>
          <tr>
            <td>
              A user of our software (e.g., a member of staff within a hospital)
            </td>
            <td>Name, address, job title, e-mail, telephone number</td>
          </tr>
          <tr>
            <td>A patient or a licensee of our software</td>
            <td>Name, patient IDs, date of birth, medical records</td>
          </tr>
          <tr>
            <td>
              Individual making enquiries / seeking customer service assistance
              (e.g., support in relation to our software)
            </td>
            <td>Name, address, e-mail, telephone number</td>
          </tr>
        </table>
        <h4 className="is-size-4 has-text-weight-semibold">
          How do we collect your personal data?
        </h4>
        <p>
          We may collect personal data about you from the following sources:
        </p>
        <ul>
          <li>
            Information you provide to us via our website or when using our
            software.
          </li>
          <li>
            Information that is provided to us by a licensee of our software,
            e.g., information provided <br /> by a hospital so that a user of
            our software may access and use the software.
          </li>
        </ul>
        <h4 className="is-size-4 has-text-weight-semibold">
          How do we store your personal data and keep it secure?
        </h4>
        <p>We use reasonable and up to date security methods to:</p>
        <ul>
          <li>keep your data secure.</li>
          <li>
            prevent unauthorised or unlawful access to your personal data.
          </li>
          <li>
            prevent the accidental loss of or damage to your personal data.
          </li>
        </ul>
        <p>
          All personal data you provide to us is stored on our secure servers
          and in secure filing systems.
          <br />
          We have in place policies, procedures and technologies to maintain the
          security of all personal data from the point of collection to the
          point of destruction including procedures to deal with a security
          breach.
          <br />
          We will ensure your personal data is only accessible by those who need
          to see it for their specific role.
          <br />
          We will only transfer your personal data to a third party if that
          third party agrees to comply with our procedures and policies or if
          they have put in place equivalent policies and procedures of their
          own.
          <br />
        </p>
        <h4 className="is-size-4 has-text-weight-semibold">
          How and why, we will use your personal data?
        </h4>
        <p>We will usually only process your personal data where:</p>
        <ul>
          <li>
            the processing is necessary to comply with our legal obligations.
          </li>
          <li>
            the processing is necessary for our legitimate interests or the
            legitimate interests of third parties.
          </li>
        </ul>
        <p>
          The table below provides examples of the various ways in which we may
          use your personal data and which of the legal reasons we rely on when
          processing your personal data.
        </p>
        <table>
          <tr>
            <th>Data Subject</th>
            <th>Purpose of Processing</th>
            <th>Legal Reason for Processing</th>
          </tr>

          <tr>
            <td>Website visitor/user</td>
            <td>
              To assist or improve the individual's use of the website or
              software
            </td>
            <td>Legitimate Interests</td>
          </tr>
          <tr>
            <td>
              A user of our software (e.g., a member of staff within a hospital)
            </td>
            <td>
              To provide our software for use by the licensee/user; to
              administer and enforce the terms of our software licence
            </td>
            <td>
              Contract
              <br /> Legitimate Interests
            </td>
          </tr>
          <tr>
            <td>A patient or a licensee of our software</td>
            <td>
              To process their data when input to one of our software products
            </td>
            <td>Legitimate Interests</td>
          </tr>
          <tr>
            <td>
              Individual making enquiries / seeking customer service assistance
              (e.g., support in relation to our software)
            </td>
            <td>
              Providing details of our services / products; assisting with
              support issues relating to our software
            </td>
            <td>Legitimate Interests</td>
          </tr>
        </table>
        <p>
          Where the legal reason for processing is the performance of a contract
          with you, if you do not provide relevant personal data, we will not be
          able to fulfil our contractual obligation(s) to you and this may have
          a detrimental impact on you.
          <br />
          We do not sell or rent personal data which you provide to us.
          <br />
          If you have any questions about the contents of the above table (for
          example, if you would like to understand what our "legitimate
          interests" are for any specific processing activity) please contact
          us.
        </p>
        <h4 className="is-size-4 has-text-weight-semibold">
          How long will we keep your personal data?
        </h4>
        <p>
          We will not keep your personal data for longer than is necessary for
          the purpose(s) for which we process it.
          <br />
          This means that data will be destroyed or erased from our systems when
          it is no longer required.
        </p>
        <h4 className="is-size-4 has-text-weight-semibold">
          What rights do you have in respect of your personal data?
        </h4>
        <ul>
          <li>request access to any personal data we hold about you.</li>
          <li>
            request for any inaccurate personal data which we hold about you to
            be rectified.
          </li>
          <li>request to have your personal data erased.</li>
          <li>
            request to have the processing of your personal data restricted (for
            example, if you think the personal data, <br /> we hold about you is
            inaccurate you can ask us to stop processing it until we will either
            correct it or confirm it is accurate).
          </li>
          <li>
            request the transfer of your personal data to another data
            controller.
          </li>
          <li>
            object to certain types of processing, including processing based on
            legitimate interests, automated processing <br /> (which includes
            profiling) and processing for direct-marketing purposes
          </li>
          <li>
            withdraw consent to the processing of your personal data (where the
            legal reason for the processing of your personal data was your
            consent).
          </li>
        </ul>
        <p>
          If you wish to exercise any of the rights set out above, you must make
          the request in writing. Please note some of these rights are
          restricted in some circumstances.
        </p>
        <h4 className="is-size-4 has-text-weight-semibold">
          Who will have access to the data we hold?
        </h4>
        <p>
          Our personnel who need to access your personal data will view it in
          order that we can provide our services to you.
          <br />
          All our personnel have received data protection training and
          understand the need to keep your personal data confidential and to use
          it only for legitimate purposes.
          <br />
          In addition to our own personnel, other personnel from our service
          providers may process your personal data on our behalf (for example,
          third party hosting companies).
          <br />
        </p>
        <p>We may disclose your personal information to third parties:</p>
        <ul>
          <li>
            if we sell or buy any business or assets, in which case we may
            disclose your <br /> personal data to the prospective seller or
            buyer of such business or assets.
          </li>
          <li>
            if we or substantially all our assets are acquired by a third party,
            in which <br /> case personal data held by us will be one of the
            transferred assets
          </li>
          <li>
            if we are under a duty to disclose or share your personal data in
            order to <br /> comply with legal obligations or to protect the
            rights, property or safety of others.
          </li>
        </ul>
        <p>
          If your personal data is provided to any third parties, you are
          entitled to request details of the recipients of your personal data or
          the categories of recipients of your personal data.
          <br />
          We carry out due diligence on our service providers / other third
          parties and make sure we have a contract with them which satisfies the
          requirements of the POPI act.
          <br />
          Apart from the situations referred to above, we will not disclose your
          personal data to a third party without your consent unless we are
          satisfied that they are legally entitled to access your personal data.
          <br />
        </p>
        <h4 className="is-size-4 has-text-weight-semibold">
          Right to make a complaint
        </h4>
        <p>
          If you have any issues with our processing of your personal data and
          would like to make a complaint, you may contact us via our email.
          <br />
          This Privacy Notice was last updated 25/06/2023.
        </p>
      </div>
    </>
  );
}

export default privacy;
