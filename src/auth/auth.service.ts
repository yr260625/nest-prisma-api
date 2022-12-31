import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/models/user.model';
import { UsersService } from 'src/users/users.service';
import { compareSync } from 'bcrypt';
import { LoginResponse } from 'src/auth/dto/login-response';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.user({ email });
    if (user && compareSync(password, user.password)) {
      return user;
    }
    return null;
  }

  async login(user: User): Promise<LoginResponse> {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    };
  }
}
