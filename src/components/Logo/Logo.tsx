import React from "react";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export const Logo = () => 
  <Link to={ROUTES.HOME} className="logo">
    Online<span>Soppa</span>
  </Link>
;