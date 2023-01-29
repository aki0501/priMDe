import React from "react";
import styles from "./Resources.module.css";

const Resources = () => {
    return(
        <>
            <h1 className={styles.heading}>Resources</h1>
            <div className={styles.linkContainer}>
                <a href="https://www.outcarehealth.org">Find a LGBTQ+ Healthcare Provider</a><br /><br />
                <a href="https://lalgbtcenter.org/health-services/medical-services">LA LGBT Center</a><br /><br />
                <a href="https://www.glma.org/index.cfm?fuseaction=Page.ViewPage&PageID=939">LGBT Healthcare Directory</a><br /><br />
                <a href="https://www.uclahealth.org/programs/lgbtq/our-team/primary-care">UCLA LGBT Healthcare Providers</a><br /><br />
                <a href="https://www.glma.org/index.cfm?fuseaction=Page.ViewPage&PageID=939">LGBT Healthcare Directory</a><br /><br />
                <a href="https://www.cdc.gov/lgbthealth/links.htm">LGBT Healthcare Resources from CDC</a>
                <a href="https://dmh.lacounty.gov/resources/lgbtq-resources/">LGBT Mental Health Resources</a>
            </div>
        </>
    )
}

export default Resources