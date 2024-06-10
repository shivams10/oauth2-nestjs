import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALL_BACK_URL,
      scope: ['profile', 'email '],
    });
  }
  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log("🚀 ~ GoogleStrategy ~ validate ~ profile:", profile)
    console.log("🚀 ~ GoogleStrategy ~ validate ~ refreshToken:", refreshToken)
    console.log("🚀 ~ GoogleStrategy ~ validate ~ accessToken:", accessToken)
  }
}
