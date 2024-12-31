#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { CdkStack } from "../lib/cdk-stack";
import { FrontendStack } from "../lib/frontend-stack";

const app = new cdk.App();
const backend = new CdkStack(app, "CdkStack", {});

new FrontendStack(app, "FrontendStack", {});
