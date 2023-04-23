import Layout from '../../components/layout/Layout' 
import {healthz,get_iata} from '../../api/auth';
import React, { useState,useEffect } from 'react';

export default function Dashboard() {
  useEffect(() => {
    
    get_iata().then((res,req)=>{
      
      console.log(res,"res",req);
    }).catch((e)=>{
    })
  });

  return (
    <>
      <Layout type="auth">
        This is dashboard
      </Layout>
    </>
  );
}

