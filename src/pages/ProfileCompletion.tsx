import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { CheckCircle2, Phone, MapPin, Briefcase, Linkedin, Github, Globe, User } from 'lucide-react';
import { Header } from '@/components/Header';

const ProfileCompletion = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profileExists, setProfileExists] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    // Check if profile already exists
    const checkProfile = async () => {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (data && (data.phone || data.location || data.professional_title)) {
        // Profile has optional data, redirect to dashboard
        setProfileExists(true);
        navigate('/dashboard');
      }
    };

    checkProfile();
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          phone: formData.get('phone') as string || null,
          location: formData.get('location') as string || null,
          linkedin_url: formData.get('linkedinUrl') as string || null,
          github_url: formData.get('githubUrl') as string || null,
          portfolio_url: formData.get('portfolioUrl') as string || null,
          professional_title: formData.get('professionalTitle') as string || null,
          bio: formData.get('bio') as string || null,
        })
        .eq('id', user.id);

      if (error) throw error;

      toast.success('Profile completed successfully!');
      navigate('/dashboard');
    } catch (error: any) {
      toast.error(error.message || 'Failed to update profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = () => {
    navigate('/dashboard');
  };

  if (profileExists) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-73px)] p-4">
        <div className="w-full max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Complete Your Profile</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Add more details to enhance your resume experience. These optional fields help create more personalized resumes.
            </p>
          </div>

          {/* Main Form Card */}
          <Card className="shadow-xl border-0 bg-card/80 backdrop-blur-sm animate-slide-up">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="h-12 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="location" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Location
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="New York, NY"
                        className="h-12 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Professional Information</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="professionalTitle" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Professional Title
                      </Label>
                      <Input
                        id="professionalTitle"
                        name="professionalTitle"
                        type="text"
                        placeholder="Senior Software Engineer"
                        className="h-12 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="bio" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Professional Bio
                      </Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        placeholder="Tell us about yourself, your expertise, and what makes you unique..."
                        rows={4}
                        className="border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Social Links Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Social Links</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="linkedinUrl" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn URL
                      </Label>
                      <Input
                        id="linkedinUrl"
                        name="linkedinUrl"
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="h-12 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="githubUrl" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        GitHub URL
                      </Label>
                      <Input
                        id="githubUrl"
                        name="githubUrl"
                        type="url"
                        placeholder="https://github.com/yourusername"
                        className="h-12 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="portfolioUrl" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Portfolio URL
                    </Label>
                    <Input
                      id="portfolioUrl"
                      name="portfolioUrl"
                      type="url"
                      placeholder="https://yourportfolio.com"
                      className="h-12 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border/50">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1 h-12 font-medium transition-all duration-200 hover:bg-muted/50"
                    onClick={handleSkip}
                  >
                    Skip for Now
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 h-12 font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-200 shadow-lg hover:shadow-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Saving...
                      </div>
                    ) : (
                      'Complete Profile'
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletion;
