import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from  "@styles/layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
  notify?: boolean;
  notifyMessage?: String;
  notifyType?: String;
  title: String;
};

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { children, notify, notifyMessage, notifyType, title } = props;
  return (
    <div className={ styles.standard }>
      <div className={ styles.wrapper }>
        <section className={ styles.notify }>
          <CSSTransition
            in={notify}
            timeout={500}
            classNames="display"
            unmountOnExit
          >
            <div className={ styles.notification }>
              <div className={`${styles.message} ${notifyType}`}>{notifyMessage}</div>
            </div>
          </CSSTransition>
        </section>
        <main>
          <header className={ styles.header }>
            <h1>{title}</h1>
          </header>
          <section className={ styles.main }>{children}</section>
        </main>
        <section className={ styles.footer }>
          <footer>&#169; copyright 2020</footer>
        </section>
      </div>
    </div>
  );
};

export default Layout;
