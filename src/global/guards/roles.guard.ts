import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const matchRoles = (routeRoles, userRoles) => {
    const routeRolesMap = routeRoles.reduce((accr, role) => {
        return {
            ...accr,
            [role]: true,
        }
    }, {});
    
    for (const role of userRoles) {
        if (routeRolesMap[role]) {
            return true;
        }
    }
    return false;
}

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = {
            roles: [request.headers.role],
        };
        return matchRoles(roles, user.roles);
    }
}