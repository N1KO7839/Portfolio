type ContactData = { name: string; email: string; message: string }

export function contactEmailTemplate({ name, email, message }: ContactData) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
        <tr>
          <td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
              <tr>
                <td style="background-color:#18181b;padding:32px 40px;">
                  <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;">New Portfolio Message</h1>
                </td>
              </tr>
              <tr>
                <td style="padding:40px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding-bottom:24px;">
                        <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.05em;">Name</p>
                        <p style="margin:0;font-size:16px;color:#27272a;">${name}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom:24px;">
                        <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.05em;">Email</p>
                        <p style="margin:0;font-size:16px;color:#27272a;">${email}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
                        <p style="margin:0;font-size:16px;color:#27272a;line-height:1.6;white-space:pre-wrap;">${message}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:20px 40px;border-top:1px solid #e4e4e7;">
                  <p style="margin:0;font-size:12px;color:#a1a1aa;">Sent from your portfolio contact form</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `
}
