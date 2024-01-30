import React from 'react'

export const metadata = {
  title: "Terms of service page",
  description: "Terms of service page description",
  keywords: "team, members, collaboration, company",
  ogTitle: "Team Page - Your Website",
  ogDescription: "Explore our amazing team and their contributions.",
  ogImage: "https://example.com/path/to/og-image.jpg",
  ogProperties: {
    ogTitle: "Add a Shopping Cart to Any Website in Minutes - Snipcart",
    ogDescription:
      "Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!",
    ogUrl: "https://snipcart.com/",
    ogType: "website",
  },
};

const page = () => {
  return (
    <div>
      <div className="mt-[75px] pt-[45px]  px-[25px]  sm:px-0 sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[900px] m-auto">
        <h1 className="text-3xl font-semibold mb-[7px]">Terms of Service</h1>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          These XCheck Terms of Service (this <b>&quot;Agreement&quot;</b>) are entered
          into by XCheck LLC (&quot;XCheck&quot;) and the entity executing this Agreement
          (<b>&quot;You&quot;</b>). This Agreement governs Your use of the standard XCheck
          Analytics (the
          <b>&quot;Service&quot;</b>). BY CLICKING THE &quot;I ACCEPT&quot; BUTTON, COMPLETING THE
          REGISTRATION PROCESS, OR USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU
          HAVE REVIEWED AND ACCEPT THIS AGREEMENT AND ARE AUTHORIZED TO ACT ON
          BEHALF OF, AND BIND TO THIS AGREEMENT, THE OWNER OF THIS ACCOUNT. In
          consideration of the foregoing, the parties agree as follows:
        </p>

        <subhead className="text-xl leading-10">1. Definitions</subhead>

        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          <b> &quot;Account&quot;</b> refers to the account for the Service. All Profiles,
          websites, web pages (as applicable) linked to a single Property will
          have their Hits aggregated before determining the charge for the
          Service/Rights for that Property.
        </p>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          <b>&quot;Confidential Information&quot;</b> includes any proprietary data and
          any other information disclosed by one party to the other in writing
          and marked &quot;confidential&quot; or disclosed orally and, within five
          business days, reduced to writing and marked &quot;confidential&quot;. However,
          Confidential Information will not include any information that is or
          becomes known to the general public, which is already in the receiving
          party&apos;s possession prior to disclosure by a party or which is
          independently developed by the receiving party without the use of
          Confidential Information.
        </p>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          <b>&quot;Customer Data&quot;</b> or &quot;XCheck Analytics Data&quot; means the data you
          collect, process or store using the Service concerning the
          characteristics and activities of Users.
        </p>

        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          <b> &quot;Documentation&quot;</b> means any accompanying documentation made
          available to You by XCheck for use with the Processing Software,
          including any documentation available online.
        </p>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          <b>&quot;XAMC&quot;</b> means the XCheck Analytics Measurement Code, which is
          installed on a Property for the purpose of collecting Customer Data,
          together with any fixes, updates and upgrades provided to You.
        </p>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          <b>&quot;Hit&quot;</b> means a collection of interactions that results in data
          being sent to the Service and processed. Examples of Hits may include
          page view hits and news hits. A Hit can be a call to the Service by
          various libraries, but does not have to be so (e.g., a Hit can be
          delivered to the Service by other XCheck Analytics-supported protocols
          and mechanisms made available by the Service to You).
        </p>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          <b> &quot;Platform Home&quot;</b> means the user interface through which You can
          access certain XCheck Marketing Platform-level functionality.
        </p>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          <b>&quot;Processing Software&quot;</b> means the XCheck Analytics server-side
          software and any upgrades, which analyzes the Customer Data and
          generates the Reports.
        </p>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          <b>&quot;Profile&quot;</b> means the collection of settings that together
          determine the information to be included in, or excluded from, a
          particular Report. For example, a Profile could be established to view
          a small portion of a web site as a unique Report.
        </p>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          <b>&quot;Property&quot;</b> means any web page, application, other property or
          resource under Your control that sends data to XCheck Analytics
          Engine.
        </p>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          <b>&quot;Privacy Policy&quot;</b> means the privacy policy on a Property.
        </p>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          <b>&quot;Report&quot;</b> means the resulting analysis shown at Xcheck dashboard
          some of which may include analysis for a Profile, Website, Web page or
          news.
        </p>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          <b>&quot;Servers&quot;</b> means the cloud server managed by Xcheck with third
          party service provider like Amazon Web Services, Digital Ocean,Google
          Cloud Platform or Azure on which the Processing Software and Customer
          Data are stored.
        </p>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          <b>“SDKs”</b> mean certain software development kits or custom codes,
          which may be used or incorporated into a Website or Property app for
          the purpose of ollecting data, together with any fixes, updates, and
          upgrades provided to You.
        </p>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          &quot;Software&quot; means the Processing Software, XAMC and/or SDKs.
        </p>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          <b>&quot;Third Party&quot;</b> means any third party (i) to which You provide
          access to Your Account or (ii) for which You use the Service to
          collect information on the third party&apos;s behalf.
        </p>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          <b>&quot;Users&quot;</b> means users and/or visitors to Your Properties.
        </p>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          The words <b>&quot;include&quot;</b> and <b>&quot;including&quot;</b> mean &quot;including but
          not limited to.&quot;
        </p>

        <subhead className="text-xl leading-10">2. Fees and Service</subhead>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          Subject to Section 14, the Service is provided without charge to You
          for up to 1 million Hits per month per Account. XCheck may change its
          fees and payment policies for the Service from time to time including
          the addition of costs for geographic data, the importing of cost data
          from search engines, or other fees charged to XCheck or its
          wholly-owned subsidiaries by third party vendors for the inclusion of
          data in the Service reports. The changes to the fees or payment
          policies are effective upon Your acceptance of those changes which
          will be posted at Xcheck website. Unless otherwise stated, all fees
          are quoted in INR. Any outstanding balance becomes immediately due and
          payable upon termination of this Agreement and any collection expenses
          (including attorneys&apos; fees) incurred by XCheck will be included in the
          amount owed, and may be charged to the credit card or other billing
          mechanism associated with Your Xcheck Account.
        </p>

        <subhead className="text-xl leading-10">
          3. Member Account, Password, and Security.
        </subhead>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          To register for the Service, You must complete the registration
          process by providing XCheck with current, complete and accurate
          information as prompted by the registration form, including Your
          e-mail address (username) and password. You will protect Your
          passwords and take full responsibility for Your own, and third party,
          use of Your accounts. You are solely responsible for any and all
          activities that occur under Your Account. You will notify XCheck
          immediately upon learning of any unauthorized use of Your Account or
          any other breach of security. XCheck&apos;s (or its wholly-owned
          subsidiaries) support staff may, from time to time, log in to the
          Service under Your customer password in order to maintain or improve
          service, including to provide You assistance with technical or billing
          issues.
        </p>
        <subhead className="text-xl leading-10">
          4. Nonexclusive License.
        </subhead>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          Subject to the terms and conditions of this Agreement, (a) XCheck
          grants You a limited, revocable, non-exclusive, non-sublicensable
          license to install, copy and use the XAMC and/or SDKs solely as
          necessary for You to use the Service on Your Properties or Third
          Party&apos;s Properties; and (b) You may remotely access your data report
          on XCheck Dashboard. You will not (and You will not allow any third
          party to) (i) copy, modify, adapt, translate or otherwise create
          derivative works of the Software or the Documentation; (ii) reverse
          engineer, decompile, disassemble or otherwise attempt to discover the
          source code of the Software, except as expressly permitted by the law
          in effect in the jurisdiction in which You are located; (iii) rent,
          lease, sell, assign or otherwise transfer rights in or to the
          Software, the Documentation or the Service; (iv) remove any
          proprietary notices or labels on the Software or placed by the
          Service; (v) use, post, transmit or introduce any device, software or
          routine which interferes or attempts to interfere with the operation
          of the Service or the Software; or (vi) use data labeled as belonging
          to a third party in the Service for purposes other than generating,
          viewing, and downloading Reports. You will comply with all applicable
          laws and regulations in Your use of and access to the Documentation,
          Software, Service and Reports.
        </p>
        <subhead className="text-xl leading-10">
          5. Confidentiality and Beta Features
        </subhead>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          Neither party will use or disclose the other party&apos;s Confidential
          Information without the other&apos;s prior written consent except for the
          purpose of performing its obligations under this Agreement or if
          required by law, regulation or court order; in which case, the party
          being compelled to disclose Confidential Information will give the
          other party as much notice as is reasonably practicable prior to
          disclosing the Confidential Information. Certain Service features are
          identified as &quot;Alpha,&quot; &quot;Beta,&quot; &quot;Experiment,&quot; (either within the
          Service or elsewhere by XCheck) or as otherwise unsupported or
          confidential (collectively,
          <b>&quot;Beta Features&quot;</b>). You may not disclose any information from
          Beta Features or the terms or existence of any non-public Beta
          Features. XCheck will have no liability arising out of or related to
          any Beta Features.
        </p>

        <subhead className="text-xl leading-10">
          6. Information Rights and Publicity.
        </subhead>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          XCheck and its wholly owned subsidiaries may retain and use, subject
          to the terms of its privacy policy, information collected in Your use
          of the Service. XCheck will not share Your Customer Data or any Third
          Party&apos;s Customer Data with any third parties unless XCheck (i) has
          Your consent for any Customer Data or any Third Party&apos;s consent for
          the Third Party&apos;s Customer Data; (ii) concludes that it is required by
          law or has a good faith belief that access, preservation or disclosure
          of Customer Data is reasonably necessary to protect the rights,
          property or safety of XCheck, its users or the public; or (iii)
          provides Customer Data in certain limited circumstances to third
          parties to carry out tasks on XCheck&apos;s behalf (e.g., billing or data
          storage) with strict restrictions that prevent the data from being
          used or shared except as directed by XCheck. When this is done, it is
          subject to agreements that oblige those parties to process Customer
          Data only on XCheck&apos;s instructions and in compliance with this
          Agreement and appropriate confidentiality and security measures.
        </p>

        <subhead className="text-xl leading-10">7. Privacy.</subhead>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          You will not and will not assist or permit any third party to, pass
          information to XCheck that XCheck could use or recognize as personally
          identifiable information. You will have and abide by an appropriate
          Privacy Policy and will comply with all applicable laws, policies, and
          regulations relating to the collection of information from Users. You
          must post a Privacy Policy and that Privacy Policy must provide notice
          of Your use of cookies, identifiers for mobile devices (e.g., Android
          Advertising Identifier or Advertising Identifier for iOS) or similar
          technology used to collect data. You must disclose the use of XCheck
          Analytics, and how it collects and processes data. This can be done by
          displaying a prominent link to the site &quot;How XCheck uses data when you
          use our partners&apos; sites or apps&quot;, or any other URL XCheck may provide
          from time to time). You will use commercially reasonable efforts to
          ensure that a User is provided with clear and comprehensive
          information about, and consents to, the storing and accessing of
          cookies or other information on the User’s device where such activity
          occurs in connection with the Service and where providing such
          information and obtaining such consent is required by law. You must
          not circumvent any privacy features (e.g., an opt-out) that are part
          of the Service. You will comply with all applicable XCheck Analytics
          policies located at Privacy Policy (or such other URL as XCheck may
          provide) as modified from time to time (the
          <b>&quot;XCheck Analytics Policies&quot;</b>).
        </p>
        <subhead className="text-xl leading-10">8. Indemnification.</subhead>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          To the extent permitted by applicable law, You will indemnify, hold
          harmless and defend XCheck and its wholly-owned subsidiaries, at Your
          expense, from any and all third-party claims, actions, proceedings,
          and suits brought against XCheck or any of its officers, directors,
          employees, agents or affiliates, and all related liabilities, damages,
          settlements, penalties, fines, costs or expenses (including,
          reasonable attorneys&apos; fees and other litigation expenses) incurred by
          XCheck or any of its officers, directors, employees, agents or
          affiliates, arising out of or relating to (i) Your breach of any term
          or condition of this Agreement, (ii) Your use of the Service, (iii)
          Your violations of applicable laws, rules or regulations in connection
          with the Service, (iv) any representations and warranties made by You
          concerning any aspect of the Service, the Software or Reports to any
          Third Party; (v) any claims made by or on behalf of any Third Party
          pertaining directly or indirectly to Your use of the Service, the
          Software or Reports; (vi) violations of Your obligations of privacy to
          any Third Party; and (vii) any claims with respect to acts or
          omissions of any Third Party in connection with the Service, the
          Software or Reports. XCheck will provide You with written notice of
          any claim, suit or action from which You must indemnify XCheck. You
          will cooperate as fully as reasonably required in the defense of any
          claim. XCheck reserves the right, at its own expense, to assume the
          exclusive defense and control of any matter subject to indemnification
          by You.
        </p>
        <subhead className="text-xl leading-10">9. Third Parties.</subhead>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          If You use the Service on behalf of the Third Party or a Third Party
          otherwise uses the Service through Your Account, whether or not You
          are authorized by XCheck to do so, then You represent and warrant that
          (a) You are authorized to act on behalf of, and bind to this
          Agreement, the Third Party to all obligations that You have under this
          Agreement, (b) XCheck may share with the Third Party any Customer Data
          that is specific to the Third Party&apos;s Properties, and (c) You will not
          disclose Third Party&apos;s Customer Data to any other party without the
          Third Party&apos;s consent.
        </p>
        <subhead className="text-xl leading-10">
          10. DISCLAIMER OF WARRANTIES.
        </subhead>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, EXCEPT AS EXPRESSLY
          PROVIDED FOR IN THIS AGREEMENT, XCheck MAKES NO OTHER WARRANTY OF ANY
          KIND, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING
          WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR USE AND NONINFRINGEMENT.
        </p>
        <subhead className="text-xl leading-10">
          11. LIMITATION OF LIABILITY.
        </subhead>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          TO THE EXTENT PERMITTED BY APPLICABLE LAW, XCheck WILL NOT BE LIABLE
          FOR YOUR LOST REVENUES OR INDIRECT, SPECIAL, INCIDENTAL,
          CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, EVEN IF XCheck OR ITS
          SUBSIDIARIES AND AFFILIATES HAVE BEEN ADVISED OF, KNEW OR SHOULD HAVE
          KNOWN THAT SUCH DAMAGES WERE POSSIBLE AND EVEN IF DIRECT DAMAGES DO
          NOT SATISFY A REMEDY. XCheck&apos;S (AND ITS WHOLLY OWNED SUBSIDIARIES’)
          TOTAL CUMULATIVE LIABILITY TO YOU OR ANY OTHER PARTY FOR ANY LOSS OR
          DAMAGES RESULTING FROM CLAIMS, DEMANDS, OR ACTIONS ARISING OUT OF OR
          RELATING TO THIS AGREEMENT WILL NOT EXCEED $500 (USD).
        </p>
        <subhead className="text-xl leading-10">
          12. Proprietary Rights Notice.
        </subhead>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          The Service, which includes the Software and all Intellectual Property
          Rights therein are, and will remain, the property of XCheck (and its
          wholly owned subsidiaries). All rights in and to the Software not
          expressly granted to You in this Agreement are reserved and retained
          by XCheck and its licensors without restriction, including, XCheck&apos;s
          (and its wholly owned subsidiaries’) right to sole ownership of the
          Software and Documentation. Without limiting the generality of the
          foregoing, You agree not to (and not to allow any third party to): (a)
          sublicense, distribute, or use the Service or Software outside of the
          scope of the license granted in this Agreement; (b) copy, modify,
          adapt, translate, prepare derivative works from, reverse engineer,
          disassemble, or decompile the Software or otherwise attempt to
          discover any source code or trade secrets related to the Service; (c)
          rent, lease, sell, assign or otherwise transfer rights in or to the
          Software, Documentation or the Service; (d) use, post, transmit or
          introduce any device, software or routine which interferes or attempts
          to interfere with the operation of the Service or the Software; (e)
          use the trademarks, trade names, service marks, logos, domain names
          and other distinctive brand features or any copyright or other
          proprietary rights associated with the Service for any purpose without
          the express written consent of XCheck; (f) register, attempt to
          register, or assist anyone else to register any trademark, trade name,
          serve marks, logos, domain names and other distinctive brand features,
          copyright or other proprietary rights associated with XCheck (or its
          wholly owned subsidiaries) other than in the name of XCheck (or its
          wholly owned subsidiaries, as the case may be); (g) remove, obscure,
          or alter any notice of copyright, trademark, or other proprietary
          right appearing in or on any item included with the Service or
          Software; or (h) seek, in a proceeding filed during the term of this
          Agreement or for one year after such term, an injunction of any
          portion of the Service based on patent infringement.
        </p>
        <subhead className="text-xl leading-10">
          13. Term and Termination.
        </subhead>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          Either party may terminate this Agreement at any time with notice.
          Upon any termination of this Agreement, XCheck will stop providing,
          and You will stop accessing the Service. Additionally, if Your Account
          and/or Properties are terminated, You will (i) delete all copies of
          the GAMC from all Properties and/or (ii) suspend any and all use of
          the SDKs within 3 business days of such termination. In the event of
          any termination (a) You will not be entitled to any refunds of any
          usage fees or any other fees, and (b) any outstanding balance for
          Service rendered through the date of termination will be immediately
          due and payable in full and (c) all of Your historical Report data
          will no longer be available to You.
        </p>
        <subhead className="text-xl leading-10">
          14. Modifications to Terms of Service and Other Policies.
        </subhead>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          XCheck may modify these terms or any additional terms that apply to
          the Service to, for example, reflect changes to the law or changes to
          the Service. You should look at the terms regularly. XCheck will post
          notice of modifications to these terms the XCheck Analytics Policies,
          or other policies referenced in these terms at the applicable URL for
          such policies. Changes will not apply retroactively and will become
          effective no sooner than 14 days after they are posted. If You do not
          agree to the modified terms for the Service, You should discontinue
          Your use XCheck Analytics. No amendment to or modification of this
          Agreement will be binding unless (i) in writing and signed by a duly
          authorized representative of XCheck, (ii) You accept updated terms
          online, or (iii) You continue to use the Service after XCheck has
          posted updates to the Agreement or to any policy governing the
          Service.
        </p>
        <subhead className="text-xl leading-10">
          15. Miscellaneous, Applicable Law and Venue.
        </subhead>
        <p className="text-[#7b7b7b] text-sm leading-7 mb-[14px]">
          XCheck will be excused from performance in this Agreement to the
          extent that performance is prevented, delayed or obstructed by causes
          beyond its reasonable control. This Agreement (including any amendment
          agreed upon by the parties in writing) represents the complete
          agreement between You and XCheck concerning its subject matter, and
          supersedes all prior agreements and representations between the
          parties. If any provision of this Agreement is held to be
          unenforceable for any reason, such provision will be reformed to the
          extent necessary to make it enforceable to the maximum extent
          permissible so as to effect the intent of the parties, and the
          remainder of this Agreement will continue in full force and effect.
          This Agreement will be governed by and construed under the laws of
          India without reference to its conflict of law principles. In the
          event of any conflicts between foreign law, rules, and regulations,
          and Indian law, rules, and regulations, Indian law, rules and
          regulations will prevail and govern. Each party agrees to submit to
          the exclusive and personal jurisdiction of the courts located in
          Raipur, Chhattisgarh, India. The United Nations Convention on
          Contracts for the International Sale of Goods and the Uniform Computer
          Information Transactions Act do not apply to this Agreement. A waiver
          of any default is not a waiver of any subsequent default. You may not
          assign or otherwise transfer any of Your rights in this Agreement
          without XCheck&apos;s prior written consent, and any such attempt is void.
          The relationship between XCheck and You is not one of a legal
          partnership relationship, but is one of independent contractors. This
          Agreement will be binding upon and inure to the benefit of the
          respective successors and assigns of the parties hereto. The following
          sections of this Agreement will survive any termination thereof: 1, 4,
          5, 6 (except the last two sentences), 7, 8, 9, 10, 11, 12, 14, 15 and,
          16. Last Updated June 6, 2020
        </p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default page