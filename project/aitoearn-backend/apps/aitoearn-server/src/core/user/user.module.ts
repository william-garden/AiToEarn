import { Global, Module } from '@nestjs/common'
import { HelpersModule } from '@yikart/helpers'
import { LoginController } from './login.controller'
import { LoginService } from './login.service'
import { UserPopController } from './user-pop.controller'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Global()
@Module({
  imports: [HelpersModule],
  controllers: [UserController, LoginController, UserPopController],
  providers: [UserService, LoginService],
  exports: [UserService],
})
export class UserModule { }
