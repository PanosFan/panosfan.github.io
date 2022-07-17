import Links from "../../Links/Links";
import "./Aside.scss";

const Aside = () => {
  return (
    <aside data-aos="fade">
      <Links />
      <a id="mailTo" href="mailto:panfanartzis@gmail.com">
        panfanartzis@gmail.com
      </a>
    </aside>
  );
};

export default Aside;
