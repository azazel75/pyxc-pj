FunctionDef(args=arguments(args=[],
                           defaults=[],
                           kw_defaults=[],
                           kwarg=None,
                           kwonlyargs=[],
                           vararg=None),
            body=[Assign(targets=[Name(ctx=Store(),
                                       id='foo')],
                         value=Str(s='foofoo')),
                  Expr(value=Subscript(ctx=Load(),
                                       slice=Slice(lower=Num(n=1),
                                                   step=None,
                                                   upper=None),
                                       value=Name(ctx=Load(),
                                                  id='foo'))),
                  Expr(value=Subscript(ctx=Load(),
                                       slice=Slice(lower=Num(n=3),
                                                   step=None,
                                                   upper=UnaryOp(op=USub(),
                                                                 operand=Num(n=1))),
                                       value=Name(ctx=Load(),
                                                  id='foo'))),
                  Expr(value=Subscript(ctx=Load(),
                                       slice=Index(value=Num(n=2)),
                                       value=Name(ctx=Load(),
                                                  id='foo')))],
            decorator_list=[],
            name='func',
            returns=None)
